import TalkRoomPage from "@/app/talkroom/_component/TalkRoomPage";

const page = ({ params }: { params: { result: string } }) => {
  return <TalkRoomPage params={params ?? { result: "" }} />;
};

export default page;
