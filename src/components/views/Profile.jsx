export const Profile = ({ user }) => {
  let date = new Date(user.id).toString();
  return (
    <>
      <div className="w-full flex justify-center h-[calc(100vh-64px)] align-middle items-center">
        <div className=" bg-white rounded-lg p-10 shadow-md w-[500px]">
          <h1 className="text-2xl font-bold ">Profile</h1>
          <span>
            <b className="font-bold">Name</b>: {user.name}
          </span>
          <br />
          <span>
            <b className="font-bold">Email</b>: {user.email}
          </span>
          <br />
          <span>
            <b className="font-bold">Created on</b>: {date}
          </span>
        </div>
      </div>
    </>
  );
};
