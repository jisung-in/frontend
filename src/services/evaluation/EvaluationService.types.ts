export interface EvaluationRequestProps {
  isbn: string;
  size: number;
  order: string;
}

export interface AllEvaluationData {
  content: {
    reviewId: number;
    ratingId: number;
    creatorId: number;
    username: string;
    profileImage: string;
    reviewContent: string;
    starRating: number;
    likeCount: number;
  }[];
  hasContent: boolean;
  number: number;
  size: number;
  isFirst: boolean;
  isLast: boolean;
}

export interface EvaluationTotalData {
  code: number;
  data: AllEvaluationData;
  message: string;
  status: string;
}

export interface EvaluationCountProps {
  isbn: string;
}

export interface EvaluationCountTotalData {
  code: number;
  data: number;
  message: string;
  status: string;
}
