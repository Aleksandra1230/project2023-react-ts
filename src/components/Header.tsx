import { Avatar } from "antd";

export const Header: React.FC = () => {
  return (
    <div className="header">
        <h1>Movie Search</h1>
        <Avatar size={64}  className='avatar' src={"https://i.pravatar.cc/150?img=48"} />
        <p className="username">Alexandra</p>
    </div>
  );
};
