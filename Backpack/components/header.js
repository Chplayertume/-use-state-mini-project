export const Header = ({ firstName }) => {
  return (
    <section className="bg-orange-50 px-6 py-2 text-center flex justify-between">
      <p className="text-2xl">👋 {firstName}</p>
      <div className="text-grey-100 flex gap-5">
        <div>Nuur</div>
        <div>Sonirhol</div>
        <div>Holboo barih</div>
      </div>
    </section>
  );
};
