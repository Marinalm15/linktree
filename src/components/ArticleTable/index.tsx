import "./style.css";
import { Table } from "antd";
import { Trash, Pencil, Warning } from "@phosphor-icons/react";
import { useEffect, useState } from "react";
import { Modal } from "antd";
import { useArticle } from "../../hooks/useArticle";
import { Notify } from "notiflix";
import useNotiflix from "../../hooks/useNotiflix";
import { useNavigate } from "react-router-dom";

export default function ArticleTable() {
  const [selectedId, setSelectedId] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { notify } = useNotiflix();
  const { deleteArticle } = useArticle();
  const { Column } = Table;
  const { listArticles, articles, setArticles } = useArticle();
  const navigate = useNavigate();

  useEffect(() => {
    let ignore = false;
    setArticles([]);

    listArticles().then((response) => {
      if (!ignore) {
        setArticles(response.data);
      }
    });

    return () => {
      ignore = true;
    };
  }, []);

  function handleNavigateToEditArticle(_id: string) {
    navigate(`/artigo/${_id}`);
  }

  const handleDeleteArticle = () => {
    setIsModalOpen(false);

    return deleteArticle(selectedId)
      .then((response) => {
        if (response.status === 200) {
          setArticles(response.data);
          return Notify.success("O artigo foi excluído", notify);
        }
      })
      .catch((error) => {
        const status = error.response.status;
        switch (status) {
          case 404:
            return Notify.failure(error.response.error, notify);

          default:
            return Notify.failure(
              "Ocorreu um erro ao apagar o artigo!",
              notify
            );
        }
      });
  };

  function handleCancel() {
    setIsModalOpen(false);
  }

  function showModal() {
    setIsModalOpen(true);
  }

  const dataSource = articles?.map((article) => {
    return {
      key: article._id,
      id: article._id,
      titulo: article.name,
      url: article.url,
      data: new Intl.DateTimeFormat("pt-BR", { timeZone: "UTC" }).format(
        new Date(article.createdAt)
      ),
    };
  });

  return (
    <>
      <div className="table_container">
        <Table
          id="article_table"
          className="table_article"
          rowClassName={(record, index) =>
            index % 2 === 0 ? "table-row-light" : "table-row-dark"
          }
          style={{
            width: "80%",
          }}
          size="large"
          bordered
          dataSource={dataSource}
          pagination={{
            pageSize: 6,
            position: ["bottomCenter"],
          }}
          scroll={{ y: 350, x: 800 }}
        >
          <Column
            responsive={["xs", "sm", "md"]}
            width="12%"
            title="Data"
            dataIndex="data"
            key="data"
            sorter={(a: any, b: any): number => a.data.localeCompare(b.data)}
          />
          <Column
            responsive={["xs", "sm", "md"]}
            width="30%"
            title="Titulo"
            dataIndex="titulo"
            key="titulo"
          />
          <Column
            responsive={["xs", "sm", "md"]}
            width="30%"
            title="URL"
            dataIndex="url"
            key="url"
          />

          <Column
            title="Ações"
            key="action"
            width="10%"
            render={(links: any) => {
              return (
                <div className="actions">
                  <div>
                    <button
                      className="trash"
                      onClick={() => {
                        setSelectedId(links.id);
                        showModal();
                      }}
                    >
                      <Trash className="trash_icon" size={20} />
                    </button>
                  </div>
                  <div>
                    <button
                      className="pencil"
                      onClick={() => handleNavigateToEditArticle(links.id)}
                    >
                      <Pencil size={20} />
                    </button>
                  </div>
                </div>
              );
            }}
          />
        </Table>
      </div>

      <Modal
        title={
          <div className="header_modal_delete">
            <Warning size={30} className="warning" />
            <p>Tem certeza?</p>
          </div>
        }
        open={isModalOpen}
        onOk={() => handleDeleteArticle()}
        onCancel={handleCancel}
      >
        <p>Deseja realmente apagar este artigo?</p>
      </Modal>
    </>
  );
}
