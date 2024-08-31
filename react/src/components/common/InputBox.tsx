const InputBox = ({
  type,
  placeholder,
  min,
  max,
  name,
  value,
  onChange,
}: any) => {
  return (
    <div className="mb-4">
      <input
        type={type}
        placeholder={placeholder}
        min={min}
        max={max}
        name={name}
        value={value}
        onChange={onChange}
        className="w-full rounded-md border border-stroke bg-transparent px-5 py-3 text-base text-body-color outline-none focus:border-green dark:border-dark-3 dark:text-white"
      />
    </div>
  );
};

export default InputBox;
