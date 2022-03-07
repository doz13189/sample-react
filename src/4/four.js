import { CssModules } from "./CssModules";
import { InlineStyle } from "./InlineStyle";
import { StyledComponents } from "./StyledComponents";
import { StyledJsx } from "./StyledJsx";

export default function Four() {
    return (
        <div>
            <InlineStyle />
            <CssModules />
            <StyledJsx />
            <StyledComponents />
        </div>
    )
}