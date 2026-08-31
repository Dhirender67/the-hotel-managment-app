import useUser from "./useUser";

function Avatar() {
  const { user } = useUser();
  const { avatar, fullName } = user.user_metadata;
  return (
    <>
      <div className="flex gap-2 items-center">
        <img
          src={avatar || "default-user.jpg"}
          className="rounded-full w-8 h-8 object-cover"
        />
        <span className="font-semibold">{fullName}</span>
      </div>
    </>
  );
}

export default Avatar;
