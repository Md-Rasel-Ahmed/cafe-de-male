const CategorySkeleton = () => {
  return (
    <div
      className="
        flex
        gap-2
        overflow-x-auto
        px-3
        py-3
      "
    >
      {Array.from({ length: 10 }).map((_, i) => (
        <div
          key={i}
          className="
            h-8
            w-24
            rounded-full
            bg-base-200
            animate-pulse
            flex-shrink-0
          "
        />
      ))}
    </div>
  );
};
export default CategorySkeleton;
