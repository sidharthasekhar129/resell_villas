import React from "react";
import AuthProvider from "./provider/AuthProvider";
import Routesx from "./routes/routes";
import AdminState from "./provider/AdminProvider";
import MessageState from "./provider/MessageProvider";

 import AssetState from "./provider/AssetProvider";
// import GalleryState from "./provider/GalleryProvider";

function App() {
  return (
    <AuthProvider>
      <AdminState>
        <AssetState>
          {/* <GalleryState> */}
          <MessageState>
            <Routesx />
          </MessageState>

          {/* </GalleryState> */}
        </AssetState>
      </AdminState>
    </AuthProvider>
  );
}

export default App;
