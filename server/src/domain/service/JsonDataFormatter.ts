import { Injectable } from '@nestjs/common';
import { JsonDataResponse } from '../model/JsonDataResponse';
import { JsonDataEntity } from '../model/JsonDataEntity';
import { JsonDataValue } from '../model/object/JsonDataValue';

@Injectable()
export class JsonDataFormatter {
  /**
   * ページングして取得
   * @param start 開始位置
   * @param result 取得件数
   * @param entity 全検結果
   */
  toPagingResponse(start: number, result: number, entity: JsonDataEntity): JsonDataResponse {
    const resultList = this.paging(start, result, entity.list);
    return {
      start,
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
