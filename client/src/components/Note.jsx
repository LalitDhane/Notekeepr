import Deleteicon from "@material-ui/icons/Delete";

export default function Note(props) {
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button
        onClick={() => {
          props.ondelete(props.id);
        }}
      >
        <Deleteicon />
      </button>
    </div>
  );
}
