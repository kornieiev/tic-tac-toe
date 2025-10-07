import Modal from "react-modal";

Modal.setAppElement("#root");

export default function ModalComponent({
  modalIsOpen,
  setModalIsOpen,
  winner,
  restartGame,
}) {
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={() => {
        setModalIsOpen(false);
        restartGame();
      }}
      contentLabel='End game modal'
      style={{
        overlay: {
          backgroundColor: "rgba(0, 0, 0, 0.6)",
        },
        content: {
          maxWidth: "400px",
          margin: "auto",
          borderRadius: "12px",
          padding: "20px",
        },
      }}
    >
      <h2
        style={{
          fontSize: "1.25rem",
          fontWeight: "700",
          marginBottom: "2rem",
          color: "#374151",
          textAlign: "center",
        }}
      >
        {winner}
      </h2>
      <p
        style={{
          fontSize: "1rem",
          fontWeight: "300",
          color: "#374151",
          textAlign: "center",
          marginBottom: "3rem",
        }}
      >
        Start new game?
      </p>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          marginTop: "1rem",
        }}
      >
        <button
          onClick={() => {
            setModalIsOpen(false);
            restartGame();
          }}
          style={{
            padding: "1rem 3rem",
            backgroundColor: "#374151",
            color: "#fff",
            borderRadius: "0.25rem",
            border: "none",
            cursor: "pointer",
          }}
        >
          Yes
        </button>
        <button
          onClick={() => {
            setModalIsOpen(false);
          }}
          style={{
            padding: "1rem 3rem",
            backgroundColor: "#fff",
            color: "#374151",
            borderRadius: "0.25rem",
            border: "1px solid #374151",
            cursor: "pointer",
          }}
        >
          No
        </button>
      </div>
    </Modal>
  );
}
