import Service from "../Service";
import {
  EvaluationCountProps,
  EvaluationCountTotalData,
  EvaluationRequestProps,
  EvaluationTotalData,
} from "./EvaluationService.types";

class EvaluationService extends Service {
  async getEvaluation({ isbn, size, order }: EvaluationRequestProps) {
    const { data } = await this.http.get<EvaluationTotalData>(
      `/v1/books/${isbn}/reviews?page=1&size=${size}&order=${order}`,
    );
    return data;
  }
  async getEvaluationCount({ isbn }: EvaluationCountProps) {
    const { data } = await this.http.get<EvaluationCountTotalData>(
      `/v1/books/${isbn}/reviews/count`,
    );
    return data;
  }
}

const evaluationService = new EvaluationService();
export default evaluationService;
