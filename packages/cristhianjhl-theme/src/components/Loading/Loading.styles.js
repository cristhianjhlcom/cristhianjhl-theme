import { styled } from "frontity";

export const Wrapper = styled.div`
    width: 95%;
    max-width: var(--maxWidthMain);
    margin: 0 auto;
    min-height: calc(100vh - 250px);
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
`;

export const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 1.25rem;
    text-align: center;
    margin: 5rem 0;

    @keyframes ldio-1ykqe63a8dh {
        0% { transform: rotate(0deg) }
        50% { transform: rotate(22.5deg) }
        100% { transform: rotate(45deg) }
    }
    .ldio-1ykqe63a8dh > div {
        transform-origin: 100px 100px;
        animation: ldio-1ykqe63a8dh 0.5555555555555556s infinite linear;
    }
    .ldio-1ykqe63a8dh > div div {
        position: absolute;
        width: 22px;
        height: 152px;
        background: #006ab0;
        left: 100px;
        top: 100px;
        transform: translate(-50%,-50%);
    }
    .ldio-1ykqe63a8dh > div div:nth-child(1) {
        width: 120px;
        height: 120px;
        border-radius: 50%;
    }
    .ldio-1ykqe63a8dh > div div:nth-child(6) {
        width: 80px;
        height: 80px;
        background: #ffffff;
        border-radius: 50%;
    }.ldio-1ykqe63a8dh > div div:nth-child(3) {
    transform: translate(-50%,-50%) rotate(45deg)
    }.ldio-1ykqe63a8dh > div div:nth-child(4) {
    transform: translate(-50%,-50%) rotate(90deg)
    }.ldio-1ykqe63a8dh > div div:nth-child(5) {
    transform: translate(-50%,-50%) rotate(135deg)
    }
    .loadingio-spinner-gear-k0eoycy8cp {
    width: 200px;
    height: 200px;
    display: inline-block;
    overflow: hidden;
    background: none;
    }
    .ldio-1ykqe63a8dh {
    width: 100%;
    height: 100%;
    position: relative;
    transform: translateZ(0) scale(1);
    backface-visibility: hidden;
    transform-origin: 0 0; /* see note above */
    }
    .ldio-1ykqe63a8dh div { box-sizing: content-box; }
`;