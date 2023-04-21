import notesStore from "../stores/notesStore";

export default function CreateForm() {
  const store = notesStore();

  if (store.updateForm._id) return <></>;

  return (
    <div>
      <h2>Create note</h2>   
      <form onSubmit={store.createNote}>
      <table>
        <th>Title</th>
        <th>Content</th>
        <tr>
          <td> 
            <input
              onChange={store.updateCreateFormField}
              value={store.createForm.title}
              name="title"
            />
          </td>
          <td>
            <textarea
              onChange={store.updateCreateFormField}
              value={store.createForm.body}
              name="body"
            />
          </td>
          <td>
          <button type="submit">Create note</button>
          </td>
        </tr>
      </table>  
      </form>
    </div>
  );
}