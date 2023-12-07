import { useState } from "react";

type Selamla = {
  selam?: string;
};

const Post = () => {
  const [selam, setSelam] = useState<Selamla>({ selam: "selamın aleyküm" });

  const selamla = () => {
    setSelam({
      selam:
        selam.selam === "aleyküm selam" ? "selamın aleyküm" : "aleyküm selam",
    });
  };

  return (
    <div>
      <h1 className="h1">{selam?.selam || "Değer yok"}</h1>
      <button onClick={selamla}>SELAMLA!</button>
    </div>
  );
};

export default Post;
