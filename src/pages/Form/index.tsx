import "./style.css";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Input } from "../../components/Form/Input";
import { Error } from "../../components/Form/ErrorMsg/ErrorMsg";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useArticle } from "../../hooks/useArticle";
import { CreateArticle } from "../../model/Article";
import { Notify } from "notiflix";
import useNotiflix from "../../hooks/useNotiflix";

export const Form = () => {
  const { id } = useParams();
  const { notify } = useNotiflix();
  const { createArticle, listArticlesById, updateArticle } = useArticle();

  const schema = yup.object({
    name: yup.string().required("O campo é obrigatório"),
    url: yup.string().required("URL inválida"),
    image: yup.mixed().optional(),
  });

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    reset,
    control,
  } = useForm<CreateArticle>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: CreateArticle) => {
    const { name, url, image } = data;

    const formData = new FormData();
    formData.append("name", name);
    formData.append("url", url);

    if (image) {
      formData.append("image", image);
      console.log("entrou");
    }

    if (id) {
      return updateArticle(id, formData)
        .then((response) => {
          if (response.status === 204) {
            window.location.replace("/");
            return Notify.success("Artigo salvo com sucesso", notify);
          }
        })

        .catch((error) => {
          const status = error.response.status;

          switch (status) {
            case 400:
              return Notify.failure(error.response.error, notify);

            default:
              return Notify.failure(
                "Ocorreu um erro na edição do artigo!",
                notify
              );
          }
        });
    }

    return createArticle(formData)
      .then((response) => {
        if (response.status === 201) {
          reset();
          return Notify.success("Artigo criado com sucesso", notify);
        }
      })
      .catch((error) => {
        const status = error.response.status;

        switch (status) {
          case 400:
            return Notify.failure(error.response.error, notify);

          default:
            return Notify.failure(
              "Ocorreu um erro na criação do artigo!",
              notify
            );
        }
      });
  };

  useEffect(() => {
    let ignore = false;

    if (id) {
      function fetchArticle(id: string) {
        return listArticlesById(id)
          .then((response) => {
            const data = response.data;

            if (response && !ignore) {
              setValue("name", data.name);
              setValue("url", data.url);
            }
          })
          .catch((error) => {
            Notify.failure(error.response.data.error, notify);
          });
      }

      fetchArticle(id);
    }

    return () => {
      ignore = true;
    };
  }, [id]);

  return (
    <div className="fundo_total">
      <form onSubmit={handleSubmit(onSubmit)} method="POST" id="form_container">
        <h3 className="inserir">{id ? "Editar artigo" : "Inserir artigo"}</h3>
        <div>
          <label>Título</label>
          <div>
            <Input
              register={register}
              className="placeholder"
              name="name"
              placeholder="Inserir Título"
              type="text"
            />
            <p>{errors.name?.message}</p>
          </div>
        </div>
        <div>
          <label>URL</label>
          <div>
            <Input
              register={register}
              className="placeholder"
              name="url"
              placeholder="Inserir URL"
              type="text"
            />
            <Error message={errors.url?.message} />
          </div>
        </div>
        <div>
          <label>Imagem</label>
          <div>
            <Controller
              control={control}
              name={"image"}
              render={({ field }) => (
                <input
                  onChange={(e: any) => {
                    field.onChange(e.target.files[0]);
                  }}
                  type="file"
                  id="picture"
                />
              )}
            />
          </div>
        </div>
        <div>
          <button className="form_button" type="submit" name="enviar">
            {id ? "Salvar" : "Enviar"}
          </button>
        </div>
      </form>
    </div>
  );
};
