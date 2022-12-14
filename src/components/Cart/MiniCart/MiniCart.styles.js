import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  top: 80px;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(57, 55, 72, 0.22);
  z-index: 999;
`;

export const Title = styled.div`
  font-size: 16px;
  margin-bottom: 32px;

  b {
    font-weight: 700;
  }
`;

export const Modal = styled.div`
  position: fixed;
  top: 50%;
  left: 85%;
  transform: translate(-50%, -50%);
  background: #fff;
  z-index: 1000;
  width: 325px;
  height: 507px;
  max-height: 677px;
  display: flex;
  flex-direction: column;
  padding: 32px 16px;

  @media (max-width: 700px) {
    top: 50%;
    left: 50%;
  }

  @media (min-width: 1400px) {
    top: 35%;
    left: 88%;
  }
`;

export const Button = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 16px 32px;
  cursor: pointer;
  width: 140px;
  height: 43px;
  font-weight: 600;
  font-size: 14px;
  background: #ffffff;
  border: 1px solid #1d1f22;
  color: var(--textBody);
  margin-right: 12px;
`;

export const GreenButton = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  width: 140px;
  height: 43px;
  background: var(--actionButtons);
  font-weight: 600;
  font-size: 14px;
  color: white;
  border: none;
`;

export const WrappedContainer = styled.div`
  overflow: scroll;
  min-height: 330px;
`;

export const WrappedButtons = styled.div`
  display: flex;
  margin-top: 20px;
  vertical-align: bottom;
`;

export const WrappedTotal = styled.div`
  display: flex;
  width: 100%;
  margin-top: 20px;
  justify-content: space-between;
`;
