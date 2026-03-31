const SpecialInstruction = () => {
  return (
    <div className="bg-[#efe6d5] rounded-xl p-4">

      <h3 className="text-[#5a0a2a] font-semibold text-sm mb-3">
        Special instruction for seller
      </h3>

      <textarea
        placeholder="Type here"
        className="w-full h-32 rounded-lg border border-gray-300 p-3 text-sm outline-none resize-none"
      />

    </div>
  );
};

export default SpecialInstruction;