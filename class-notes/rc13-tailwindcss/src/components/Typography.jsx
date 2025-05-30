import React from "react";

const Typography = () => {
  return (
    <div>
      {/*//Typography*/}
      <p className="text-2xl">Typography</p>
      <p className="text-sm">Typography</p>
      <p className="text-base/8">Typography</p>
      <p className="text-lg">Typography</p>
      <p className="text-xl">Typography</p>
      <p className="text-4xl">Baslik</p>
      <p className="text-3xl">Baslik</p>
      {/*// Line Clamp*/}
      <article className="line-clamp-2">
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore fuga
          dolore, dolorum beatae dignissimos explicabo vitae facilis magni nemo
          distinctio magnam quod unde deserunt, repellendus recusandae libero
          voluptatum. Numquam eligendi rerum aperiam, error dolores asperiores
          deserunt enim voluptas non. Fugit quam, eum deleniti est labore nam?
          Explicabo, totam odio, excepturi numquam accusantium recusandae
          praesentium nostrum voluptatem repellendus mollitia rerum, labore
          quibusdam harum? Temporibus a eius excepturi eveniet, aperiam
          quibusdam obcaecati.
        </p>
      </article>
      <div>
        <p className="text-center">Merhaba</p>
        <p className="underline">Merhaba</p>
        <p className="uppercase">Merhaba</p>
        <p className="lowercase">Merhaba</p>
        <p className="text-red-400">Merhaba</p>
        <p className="text-green-900">Merhaba</p>
        <p className="text-red-600">Merhaba</p>
        <p className="text-[rgb(255,233,154)]">Merhaba</p>
        <p className="bg-slate-500">Merhaba</p>
      </div>
    </div>
  );
};

export default Typography;
