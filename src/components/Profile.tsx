import React from "react";

function Profile() {
  return (
    <div className="json-container">
      <pre className="text-white">
        {`{
  "nickname": "s4kr4",
  "position": "Web engineer",
  "accounts": [
    "GitHub": "@s4kr4",
    "Qiita": "@s4kr4",
    "Hatena": "@s4kr4",
    "Twitter": "@s4kr4_"
  ]
}`}
      </pre>
    </div>
  );
}

export default Profile;
