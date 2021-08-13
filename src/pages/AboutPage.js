import React from "react";

const styles = {
  container: {
    padding: 20,
    minHeight: "calc(100vh - 50px)",
    display: "flex",
    // alignItems: "center",
    // justifyContent: "center",
    fontWeight: 600,
    fontSize: 20,
    // textAlign: "center",
  },
};

const AboutPage = () => {
  return (
    <p style={styles.container}>
      This Phonebook application contains a set of basic functions for adding new contacts and also searching, updating
      and deleting the existing ones. Appropriate phonebook design allows you to perform simple tasks in any your
      device, such as mobile phone or laptop. You may add many users and every user has own login, password and private
      phonebook. Enjoy...
    </p>
  );
};

export default AboutPage;
