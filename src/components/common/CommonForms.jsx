export default function CommonForms({
  formControls,
  formData,
  setFormData,
  onSubmit,
  buttonText,
  isBtnDisabled,
}) {
  function renderInputsByComponentType(getControlItem) {
    let element = null;
    const value = formData[getControlItem.name] || "";

    switch (getControlItem.componentType) {
      case "input":
        element = (
          <input
            className="form-control"
            name={getControlItem.name}
            placeholder={getControlItem.placeholder}
            id={getControlItem.name}
            type={getControlItem.type}
            value={value}
            onChange={(event) =>
              setFormData({
                ...formData,
                [getControlItem.name]: event.target.value,
              })
            }
          />
        );
        break;
      case "select":
        element = (
          <select
            className="form-select"
            name={getControlItem.name}
            id={getControlItem.name}
            value={value}
            onChange={(event) =>
              setFormData({
                ...formData,
                [getControlItem.name]: event.target.value,
              })
            }
          >
            <option value="">{getControlItem.label}</option>
            {getControlItem.options &&
              getControlItem.options.length > 0 &&
              getControlItem.options.map((optionItem) => (
                <option key={optionItem.id} value={optionItem.id}>
                  {optionItem.label}
                </option>
              ))}
          </select>
        );
        break;
      case "textarea":
        element = (
          <textarea
            className="form-control"
            name={getControlItem.name}
            placeholder={getControlItem.placeholder}
            id={getControlItem.name}
            value={value}
            onChange={(event) =>
              setFormData({
                ...formData,
                [getControlItem.name]: event.target.value,
              })
            }
          />
        );
        break;
      default:
        element = (
          <input
            className="form-control"
            name={getControlItem.name}
            placeholder={getControlItem.placeholder}
            id={getControlItem.name}
            type={getControlItem.type}
            value={value}
            onChange={(event) =>
              setFormData({
                ...formData,
                [getControlItem.name]: event.target.value,
              })
            }
          />
        );
        break;
    }

    return element;
  }

  return (
    <form onSubmit={onSubmit}>
      <div className="d-flex flex-column gap-3">
        {formControls.map((controlItem) => (
          <div className="mb-3" key={controlItem.name}>
            <label className="form-label" htmlFor={controlItem.name}>
              {controlItem.label}
            </label>
            {renderInputsByComponentType(controlItem)}
          </div>
        ))}
      </div>
      <button
        disabled={isBtnDisabled}
        type="submit"
        className="btn auth-btn mt-2 w-100"
      >
        {buttonText || "Submit"}
      </button>
    </form>
  );
}
