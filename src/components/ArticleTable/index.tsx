import { Table } from "antd";
import { links } from "../../helpers/Links";
import "./style.css";
import { Trash, Pencil } from "@phosphor-icons/react";
import React, { useState } from "react";
import { Button, Modal } from "antd";

export default function ArticleTable() {
  const { Column } = Table;

  const dataSource = links?.map((link) => {
    return {
      id: link.id,
      titulo: link.name,
      url: link.url,
      data: link.data,
    };
  });

  function handleEditArticle(id: number) {
    window.open(`artigo/${id}`);
  }

  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="table_container">
        <button
          className="button_new_article"
          onClick={() => window.open("artigo")}
        >
          Novo Artigo
        </button>
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
            pageSize: 10,
            position: ["bottomCenter"],
          }}
          scroll={{ y: 350, x: 800 }}
        >
          <Column
            responsive={["xs", "sm", "md"]}
            width="10%"
            title="Data"
            dataIndex="data"
            key="data"
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
                    <Button className="trash" onClick={showModal}>
                      <Trash size={20} />
                    </Button>
                  </div>
                  <div>
                    <button
                      className="pencil"
                      onClick={() => handleEditArticle(links.id)}
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
        title="Tem certeza?"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        className="modalStyle"
      >
        <p>Deseja realmente apagar este artigo?</p>
      </Modal>
    </>
  );
}
