import React from "react";
import styled, { DefaultTheme } from "styled-components";
import CheckmarkCircleIcon from "../Svg/Icons/CheckmarkCircle";
import ErrorIcon from "../Svg/Icons/Error";
import BlockIcon from "../Svg/Icons/Block";
import InfoIcon from "../Svg/Icons/Info";
import { Text } from "../Text";
import { IconButton } from "../Button";
import { CloseIcon } from "../Svg";
import Flex from "../Box/Flex";
import { AlertProps, variants } from "./types";

interface ThemedIconLabel {
  variant: AlertProps["variant"];
  theme: DefaultTheme;
  hasDescription: boolean;
}

const getThemeColor = ({ theme, variant = variants.INFO }: ThemedIconLabel) => {
  switch (variant) {
    case variants.DANGER:
      return theme.colors.failure;
    case variants.WARNING:
      return theme.colors.warning;
    case variants.SUCCESS:
      return theme.colors.success;
    case variants.INFO:
    default:
      return theme.colors.secondary;
  }
};

const getIcon = (variant: AlertProps["variant"] = variants.INFO) => {
  switch (variant) {
    case variants.DANGER:
      return BlockIcon;
    case variants.WARNING:
      return ErrorIcon;
    case variants.SUCCESS:
      return CheckmarkCircleIcon;
    case variants.INFO:
    default:
      return InfoIcon;
  }
};

const getTitle = (variant: AlertProps["variant"] = variants.INFO) => {
  switch (variant) {
    case variants.DANGER:
      return "Error";
    case variants.WARNING:
      return "Warning";
    case variants.SUCCESS:
      return "Success";
    case variants.INFO:
    default:
      return "Success";
  }
};

const IconLabel = styled.div<ThemedIconLabel>`
  background-color: ${getThemeColor};
  border-radius: 50%;
  color: ${({ theme }) => theme.alert.background};
  padding: 12px;
`;

const withHandlerSpacing = 32 + 12 + 8; // button size + inner spacing + handler position
const Details = styled.div<{ hasHandler: boolean }>`
  // flex: 1;
  // padding-bottom: 12px;
  padding-left: 34px;
  padding-right: ${({ hasHandler }) => (hasHandler ? `${withHandlerSpacing}px` : "12px")};
  // padding-top: 12px;
  justify-content: center;
`;

const CloseHandler = styled.div`
  border-radius: 0 16px 16px 0;
  right: 8px;
  position: absolute;
  top: 8px;
`;

const StyledAlert = styled(Flex)`
  position: relative;
  background-color: ${({ theme }) => theme.alert.background};
  border-radius: 16px;
  box-shadow: 0px 20px 36px -8px rgba(14, 14, 44, 0.1), 0px 1px 1px rgba(0, 0, 0, 0.05);
`;

const StyledAlertPopup = styled(Flex)`
  transition: opacity 0.25s linear;
`;
const Alert: React.FC<AlertProps> = ({ title, children, variant, onClick }) => {
  const Icon = getIcon(variant);
  const AlertTitle = getTitle(variant);

  return (
    // <StyledAlert>
    //   <IconLabel variant={variant} hasDescription={!!children}>
    //     <Icon color="currentColor" width="24px" />
    //   </IconLabel>
    //   <Details hasHandler={!!onClick}>
    //     <Text bold>{title}</Text>
    //     {typeof children === "string" ? <Text as="p">{children}</Text> : children}
    //   </Details>
    //   {onClick && (
    //     <CloseHandler>
    //       <IconButton scale="sm" variant="text" onClick={onClick}>
    //         <CloseIcon width="24px" color="currentColor" />
    //       </IconButton>
    //     </CloseHandler>
    //   )}
    // </StyledAlert>

    <StyledAlertPopup>
      <div className="modal fade show" style={{ display: "block" }}>
        <div className="modal-dialog modal-dialog-centered ">
          <div className="modal-content">
            {/* <div className="modal-header">
              <h5 className="modal-title">{AlertTitle}</h5>
            </div> */}
            <div className="modal-body">
              <div className="row d-flex justify-content-center">
                <IconLabel variant={variant} hasDescription={!!children}>
                  <Icon color="currentColor" width="64px" />
                </IconLabel>
              </div>
            </div>
            <div className="row d-flex justify-content-center my-2">
              <Details hasHandler={!!onClick}>
                <Text bold>{title}</Text>
                {typeof children === "string" ? <Text as="p">{children}</Text> : children}
              </Details>
            </div>
            <div className="modal-footer justify-content-center">
              <button onClick={onClick} className="btn btn-sm btn-primary w-50 m-3" data-dismiss="modal">
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </StyledAlertPopup>
  );
};

export default Alert;
