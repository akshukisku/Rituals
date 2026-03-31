interface TestimonialCardProps {
  name: string;
  role: string;
  image: string;
  message: string;
}

const TestimonialCard = ({ name, role, image, message }: TestimonialCardProps) => {
  return (
    <div className="bg-[#f5f0e7] rounded-2xl p-6 max-w-[300px]">

      {/* User */}
      <div className="flex items-center gap-3 mb-4">

        <img
          src={image}
          alt={name}
          className="w-12 h-12 rounded-full object-cover"
        />

        <div>
          <h4 className="text-[#5a0a2a] font-semibold">
            {name}
          </h4>

          <p className="text-xs text-gray-500">
            {role}
          </p>
        </div>

      </div>

      {/* Message */}
      <p className="text-sm text-gray-600 leading-relaxed">
        {message}
      </p>

    </div>
  );
};

export default TestimonialCard;