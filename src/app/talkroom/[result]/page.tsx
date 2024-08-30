import TalkRoomPage from "@/app/components/TalkRoomPage/TalkRoomPage";

const page = ({ params }: { params: { result: string } }) => {
  return <TalkRoomPage params={params ?? { result: "" }} />;
};

export default page;
