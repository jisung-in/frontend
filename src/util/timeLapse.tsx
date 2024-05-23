const timeLapse = (createdDateTime: string): string => {
  const createdDate = new Date(createdDateTime);
  const currentDate = new Date();
  const timeLapseInMs = currentDate.getTime() - createdDate.getTime();
  const timeLapseInSeconds = timeLapseInMs / 1000;

  // 초 단위로 경과한 시간 계산
  if (timeLapseInSeconds < 60) {
    return `${Math.floor(timeLapseInSeconds)}초 전`;
  }

  // 분 단위로 경과한 시간 계산
  const timeLapseInMinutes = timeLapseInSeconds / 60;
  if (timeLapseInMinutes < 60) {
    return `${Math.floor(timeLapseInMinutes)}분 전`;
  }

  // 시간 단위로 경과한 시간 계산
  const timeLapseInHours = timeLapseInMinutes / 60;
  if (timeLapseInHours < 24) {
    return `${Math.floor(timeLapseInHours)}시간 전`;
  }

  // 일 단위로 경과한 시간 계산
  const timeLapseInDays = Math.floor(timeLapseInHours / 24);
  if (timeLapseInDays < 30) {
    return `${timeLapseInDays}일 전`;
  }

  // 달 단위로 경과한 시간 계산
  const timeLapseInMonths = Math.floor(timeLapseInDays / 30);
  if (timeLapseInMonths < 12) {
    return `${timeLapseInMonths}달 전`;
  }

  // 년 단위로 경과한 시간 계산
  const timeLapseInYears = Math.floor(timeLapseInMonths / 12);
  return `${timeLapseInYears}년 전`;
};

export default timeLapse;
