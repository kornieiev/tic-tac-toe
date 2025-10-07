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
          backgroundColor: "rgba(0, 0, 0, 0.9)",

          maxWidth: "400px",
          margin: "auto",
          borderRadius: "12px",
          border: "2px solid #f6ab5a",
          padding: "20px",
          height: "fit-content",
        },
      }}
    >
      <h2
        style={{
          fontSize: "1.5rem",
          fontWeight: "700",
          marginBottom: "2rem",
          color: "#7a8caaff",
          textAlign: "center",
          maxHeight: "500px",
        }}
      >
        {winner}
      </h2>
      <p
        style={{
          fontSize: "1rem",
          fontWeight: "300",
          color: "#b0bbcdff",
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
            cursor: "pointer",
            border: "none",
            fontSize: "1rem",
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
            fontSize: "1rem",
          }}
        >
          No
        </button>
      </div>
    </Modal>
  );
}
