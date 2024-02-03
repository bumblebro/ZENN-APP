function Button({ text, handleclick }) {
  return (
    <div>
      <button
        onClick={handleclick}
        className={` text-white px-4 py-2 rounded-md  w-full bg-opacity-60 bg-black `}
        name={text}
      >
        {text}
      </button>
    </div>
  );
}

export default Button;
