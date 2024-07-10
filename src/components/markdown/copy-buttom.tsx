import { useState } from "react";

const CopyButton = ({ id }: { id: string }) => {
  const [copied, setCopited] = useState(false);

  const onCopy = async () => {
    try {
      setCopited(true);
      const text = document.getElementById(id)!.innerText;
      await navigator.clipboard.writeText(text);
      setTimeout(() => {
        setCopited(false);
      }, 1000);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <button
      onClick={onCopy}
      className="inline-flex rounded-md p-2 hover:bg-zinc-200 dark:hover:bg-zinc-800 text-custom-font-main"
    >
      <div className={`transition-all${copied ? "scale-0" : "scale-100"}`}>
        copy
      </div>
      <div
        className={`absolute transition-all ${
          copied ? "scale-100" : "scale-0"
        }`}
      >
        check
      </div>
    </button>
  );
};

export default CopyButton;
