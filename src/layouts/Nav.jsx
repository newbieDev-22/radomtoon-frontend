import NavItem from "./NavItem";

const CategoryList = [
  { id: 1, page: "Art" },
  { id: 2, page: "Comics" },
  { id: 3, page: "Crafts" },
  { id: 4, page: "Dance" },
  { id: 5, page: "Design" },
  { id: 6, page: "Fashion" },
  { id: 7, page: "Film" },
  { id: 8, page: "Games" },
  { id: 9, page: "Music" },
  { id: 10, page: "Technology" },
];

export default function Nav() {
  return (
    <>
      <nav className="flex h-[3vh] w-[100vw] items-end gap-5 overflow-auto sm:justify-start px-5 md:justify-center">
        {CategoryList.map((cat) => (
          <NavItem key={cat.id} page={cat.page} onClick={() => {}} />
        ))}
      </nav>
      <hr className="border border-gray w-full my-[1.5vh]" />
    </>
  );
}
