import React from "react";
import Contact1 from "./contacts/Contact1";
import Contact2 from "./contacts/Contact2";
import Contact3 from "./contacts/Contact3";
import Contact4 from "./contacts/Contact4";
import Contact5 from "./contacts/Contact5";

const Contacts = () => {
  return (
    <div>
      <h1 style={{ textAlign: "center", margin: "2rem 0" }}>All Contact Sections</h1>
      <section>
        <h2 style={{ textAlign: "center", margin: "2rem 0" }}>Contact 1</h2>
        <Contact1 />
      </section>
      <section>
        <h2 style={{ textAlign: "center", margin: "2rem 0" }}>Contact 2</h2>
        <Contact2 />
      </section>
      <section>
        <h2 style={{ textAlign: "center", margin: "2rem 0" }}>Contact 3</h2>
        <Contact3 />
      </section>
      <section>
        <h2 style={{ textAlign: "center", margin: "2rem 0" }}>Contact 4</h2>
        <Contact4 />
      </section>
      <section>
        <h2 style={{ textAlign: "center", margin: "2rem 0" }}>Contact 5</h2>
        <Contact5 />
      </section>
    </div>
  );
};

export default Contacts;
