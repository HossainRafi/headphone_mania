import React from "react";

const Blogs = () => {
  return (
    <div className="grid grid-cols-2 gap-10 bg-slate-300 p-10">
      <div className="bg-neutral-400 p-5 rounded-2xl">
        <h1 className="font-serif font-bold text-3xl text-red-600 pb-5">
          Q: What is Context API ?
        </h1>
        <p className="text-xl text-justify leading-loose">
          <span className="mr-12"></span> React এ এক Component থেকে অন্য
          Component এ Data Send করার জন্য আমরা Props Use করি। মানে Parent
          Component থেকে Child Component এ Data পাঠানোর সময় Props এর মাধ্যমে
          Data পাঠানো হয়। এই ক্ষেত্রে অনেক সময় দেখা যায় যে, Child Component
          থেকে Parent Component অনেক Level উপরে থাকে। এমন অবস্থায় Parent
          Component থেকে Child Component এ Props Drilling এর মাধ্যমে Data পাঠাতে
          হয়। এই Props Drilling যেন না হয় সেইজন্য Context API Use করা হয়।
          Context API Data কে Global Variable এ Convert করে। যার ফলে Props
          Drilling ছাড়াই Parent Component থেকে Child Component এ Data পাঠানো
          যায়
        </p>
      </div>
      <div className="bg-neutral-400 p-5 rounded-2xl">
        <h1 className="font-serif font-bold text-3xl text-red-600 pb-5">
          Q: What is Semantic Tag ?
        </h1>
        <p className="text-xl text-justify leading-loose">
          <span className="mr-12"></span> HTML এর Semantic Tag গুলো প্রতিটিই
          একটি নির্দিষ্ট অর্থ বহন করে। Semantic Tag গুলো দেখলে এর ভিতরের
          Component সম্পর্কে Idea পাওয়া যায়। Non-Semantic Tag দেখে এর ভিতরের
          Content সম্পর্কে কোনো ধারণা পাওয়া যায়না। যেমন Header Tag কোনো
          Website এর Header কে নির্দেশ করে। Footer Tag কোনো Website এর Footer কে
          নির্দেশ করে। Article Tag Article কে নির্দেশ করে। এমন আরও অনেক Tag
          রয়েছে যেগুলো নির্দিষ্ট অর্থ বহন করে। এইগুলো Semantic Tag। অপরদিকে
          div, span এই Tag গুলো নির্দিষ্ট কোনো কিছুকেই নির্দেশ করেনা। এইগুলো হলো
          Non-Semantic Tag. কিছু Semantic Tag এর উদাহরণ হলো: Header, Nav,
          Footer, Aside, Table
        </p>
      </div>
    </div>
  );
};

export default Blogs;
