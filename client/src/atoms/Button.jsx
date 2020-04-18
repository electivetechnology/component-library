"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var styles_1 = require("@material-ui/core/styles");
var styled_components_1 = require("styled-components");
var Button_1 = require("@material-ui/core/Button");
var theme_1 = require("styles/theme");
var primaryStyles = {
    backgroundColor: theme_1.theme.primaryColorValencia + " !important",
    color: theme_1.theme.white + " !important",
    '&:hover': {
        backgroundColor: theme_1.theme.primaryColorValenciaDark + " !important",
    },
};
var secondaryStyles = {
    backgroundColor: theme_1.theme.white + " !important",
    color: theme_1.theme.primaryColorValencia + " !important",
};
var betaStyles = {
    backgroundColor: theme_1.theme.grayComment + " !important",
    color: theme_1.theme.white + " !important",
    boxShadow: '0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12)',
    '&:hover': {
        backgroundColor: theme_1.theme.grayCommentDark + " !important",
        color: theme_1.theme.white + " !important",
    },
};
var useStyles = styles_1.makeStyles({
    component: function (props) { return (__assign(__assign({}, props.themeStyle), { width: props.width + "px" })); },
});
var Wrapper = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: grid;\n  grid-template-columns: 1fr;\n  color: ", "\n    ", ";\n  ", ";\n"], ["\n  display: grid;\n  grid-template-columns: 1fr;\n  color: ", "\n    ",
    ";\n  ",
    ";\n"])), theme_1.theme.white, function (props) {
    return props.icon &&
        "\n    align-content: center;\n    padding-right: 8px;\n        grid-template-columns: 30px 1fr;\n    ";
}, function (props) {
    return props.hasChildren &&
        "\n    align-content: center;\n    padding-right: 8px;\n        grid-template-columns: 30px 1fr;\n    ";
});
var Icon = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  padding-right: 8px;\n  display: grid;\n  align-items: center;\n"], ["\n  padding-right: 8px;\n  display: grid;\n  align-items: center;\n"])));
var ButtonComponent = function (_a) {
    var text = _a.text, _b = _a.theme, theme = _b === void 0 ? 'primary' : _b, _c = _a.disabled, disabled = _c === void 0 ? false : _c, _d = _a.onClick, onClick = _d === void 0 ? null : _d, _e = _a.fullWidth, fullWidth = _e === void 0 ? false : _e, width = _a.width, icon = _a.icon, href = _a.href, target = _a.target, children = _a.children, hasChildren = _a.hasChildren, btnWidth = _a.btnWidth, borderRadius = _a.borderRadius, textTransform = _a.textTransform;
    var variant = theme === 'primary' ? 'contained' : 'outlined';
    var themeStyle = theme === 'primary'
        ? primaryStyles
        : theme === 'secondary'
            ? secondaryStyles
            : theme === 'beta'
                ? betaStyles
                : {};
    var classes = useStyles({ themeStyle: themeStyle, width: width });
    return (<Button_1.default data-qa={'ButtonComponent'} data-testid="ButtonComponent" variant={variant} disabled={disabled} className={classes.component} onClick={onClick} fullWidth={fullWidth} href={href} style={{
        width: btnWidth,
        borderRadius: borderRadius,
        textTransform: textTransform,
    }}>
      <Wrapper icon={icon} hasChildren={hasChildren}>
        {icon ? <Icon>{icon}</Icon> : ''}
        {children}
        {text}
      </Wrapper>
    </Button_1.default>);
};
exports.default = ButtonComponent;
var templateObject_1, templateObject_2;
