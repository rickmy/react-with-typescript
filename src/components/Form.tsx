import useNewSubForm from "../hooks/useNewSubForm";
import { Sub } from "../types";



interface FormProps {
  onNewSub: (newSub: Sub) => void;
}

export const Form = ({ onNewSub }: FormProps) => {

  const [inputValues, dispatch] = useNewSubForm();

  function handleSubmit(event: React.FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    onNewSub(inputValues);
    handleClear();
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {dispatch({
    type:"change_value",
    payload:{
       inputName: e.target.name,
       inputValue: e.target.value
    }
  })
  };

  const handleClear = () => {
    dispatch({
      type: "clear"
    })
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          value={inputValues?.nick}
          type="text"
          name="nick"
          id="nick"
          placeholder="nick"
        />
        <input
          onChange={handleChange}
          value={inputValues?.subMonths}
          type="number"
          name="subMonths"
          id="subMonths"
          placeholder="subMonths"
        />
        <input
          onChange={handleChange}
          value={inputValues?.avatar}
          type="text"
          name="avatar"
          id="avatar"
          placeholder="avatar"
        />
        <textarea
          onChange={handleChange}
          value={inputValues?.description}
          name="description"
          id="description"
          placeholder="description"
        ></textarea>
        <button type="submit">Save new sub!</button>
      </form>
    </div>
  );
};
