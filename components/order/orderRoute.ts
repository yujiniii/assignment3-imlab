import express, { Request, Response, Router } from 'express';

const router: Router = express.Router();

router.get('/', (req: Request, res: Response) => {
    return res.status(200).json({
        status: 200,
        message: '유저 조회 성공'
    });
});

module.exports = router;

/**
 * @todo 제품 주문 내역 열람( 결제 완료 /  결제 취소)
 */
/**
 * @todo 주문 내역 검색
 */
/**
 * @todo 주문 상태, 시작일자, 종료일자에 따른 필터 ( 쿼리스트링?? )
 */
/**
 * @todo 주문자명으로 검색
 */
