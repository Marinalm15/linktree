import "./style.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

interface FormArticleFields {
  titulo: string;
  url: string;
}

export const Form = () => {
  const schema = yup
    .object({
      titulo: yup.string().required("O campo é obrigatório"),
      url: yup.string().required("URL inválida"),
    })
    .required();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormArticleFields>({ resolver: yupResolver(schema) });

  const onSubmit = (data: any) => console.log(data);

  return (
    <div className="fundo_total">
      <form onSubmit={handleSubmit(onSubmit)} method="POST" id="form_container">
        <h3 className="inserir">Inserir artigo</h3>
        <div>
          <label>Título</label>
          <div>
            <input
              className="placeholder"
              type="text"
              placeholder="Inserir Título"
              {...register("titulo")}
            />
            <p>{errors.titulo?.message}</p>
          </div>
        </div>
        <div>
          <label>URL</label>
          <div>
            <input
              className="placeholder"
              type="url"
              placeholder="Inserir url"
              {...register("url")}
            />
            <p>{errors.url?.message}</p>
          </div>
        </div>
        <div>
          <button className="form_button" type="submit" name="enviar">
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
};
