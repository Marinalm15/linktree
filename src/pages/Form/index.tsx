import "./style.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Input } from "../../components/Form/Input";
import { Error } from "../../components/Form/ErrorMsg/ErrorMsg";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { Link, links } from "../../helpers/Links";

interface FormArticleFields {
  titulo: String;
  url: String;
}

export const Form = () => {
  const { id } = useParams();

  const schema = yup
    .object({
      titulo: yup.string().required("O campo é obrigatório"),
      url: yup.string().required("URL inválida"),
    })
    .required();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormArticleFields>({ resolver: yupResolver(schema) });

  const onSubmit = (data: any) => console.log(data);

  useEffect(() => {
    let ignore = false;

    if (id) {
      let filterLink = links.filter((link: Link) => {
        if (link.id === +id) {
          return link;
        }
      });

      let linkToEdit = filterLink[0];

      if (linkToEdit && !ignore) {
        setValue("titulo", linkToEdit.name);
        setValue("url", linkToEdit.url);
      }
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
              name="titulo"
              placeholder="Inserir Título"
              type="text"
            />
            <p>{errors.titulo?.message}</p>
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
          <button className="form_button" type="submit" name="enviar">
            {id ? "Salvar" : "Enviar"}
          </button>
        </div>
      </form>
    </div>
  );
};
