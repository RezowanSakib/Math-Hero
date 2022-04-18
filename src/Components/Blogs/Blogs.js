import React from "react";

const Blogs = () => {
  return (
    <div>
      <h2> Difference between authorization and authentication</h2>
      <p>
        Authentication is the process of verifying who someone is, whereas
        authorization is the process of verifying what specific applications,
        files, and data a user has access to
      </p>
      <h2>
        {" "}
        Why are you using firebase? What other options do you have to implement
        authentication?
      </h2>
      <p>
        {" "}
        To build rich, collaborative applications by allowing secure access to
        the database directly from client-side code.And Parse. Parse is a
        complete open-source application stack and backend framework that offers
        a collection of tools and features to help you develop your apps. ...
        1.Back4App. ... 2.AWS Amplify. ... 3.Kuzzle. ... 4.Couchbase. ...
        5.NativeScript. ... 6.RxDB. ... 7.Flutter.
      </p>
      <h2>
        What other services does firebase provide other than authentication?
      </h2>
      <p>
        Firebase Authentication provides backend services, easy-to-use SDKs, and
        ready-made UI libraries to authenticate users to your app
      </p>
    </div>
  );
};

export default Blogs;
