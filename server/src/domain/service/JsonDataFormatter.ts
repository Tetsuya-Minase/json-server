import { Injectable } from '@nestjs/common';
import { JsonDataResponse } from '../model/response/JsonDataResponse';
import { JsonDataEntity } from '../model/entity/JsonDataEntity';
import { JsonDataValue } from '../model/object/JsonDataValue';
import { ListRequestQuery } from '../model/query/ListRequestQuery';

@Injectable()
export class JsonDataFormatter {
  /**
   * ページングして取得
   * @param query 検索条件
   * @param entity 全検結果
   */
  toPagingResponse(query: ListRequestQuery, entity: JsonDataEntity): JsonDataResponse {
    const resultList = this.paging(query.start, query.result, entity.list);
    return {
      start: query.start,
      allCount: entity.list.length,
      results: resultList.length,
      list: resultList
    };
  }

  /**
   * 全件取得
   * @param entity 取得結果
   */
  toAllResponse(entity: JsonDataEntity): JsonDataResponse {
    return {
      start: 1,
      allCount: entity.list.length,
      results: entity.list.length,
      list: entity.list
    };
  }

  private paging(start: number, result: number, resultList: Array<JsonDataValue>): Array<JsonDataValue> {
    // start 以上 & result 以下(indexが0始まりなので調整)
    return resultList.filter((_, index) => (start - 1) <= index && index < result);
  }
}
