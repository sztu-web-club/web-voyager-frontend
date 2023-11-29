import type { ReservedProps } from 'vue'
import type { Avatar } from 'mdui/components/avatar.js'
import type { Badge } from 'mdui/components/badge.js'
import type { BottomAppBar } from 'mdui/components/bottom-app-bar.js'
import type { Button } from 'mdui/components/button.js'
import type { ButtonIcon } from 'mdui/components/button-icon.js'
import type { Card } from 'mdui/components/card.js'
import type { Checkbox } from 'mdui/components/checkbox.js'
import type { Chip } from 'mdui/components/chip.js'
import type { CircularProgress } from 'mdui/components/circular-progress.js'
import type { Collapse } from 'mdui/components/collapse/collapse.js'
import type { CollapseItem } from 'mdui/components/collapse/collapse-item.js'
import type { Dialog } from 'mdui/components/dialog.js'
import type { Divider } from 'mdui/components/divider.js'
import type { Dropdown } from 'mdui/components/dropdown.js'
import type { Fab } from 'mdui/components/fab.js'
import type { Icon } from 'mdui/components/icon.js'
import type { Layout } from 'mdui/components/layout.js'
import type { LayoutItem } from 'mdui/components/layout-item.js'
import type { LayoutMain } from 'mdui/components/layout-main.js'
import type { LinearProgress } from 'mdui/components/linear-progress.js'
import type { ListItem } from 'mdui/components/list-item.js'
import type { ListSubheader } from 'mdui/components/list-subheader.js'
import type { List } from 'mdui/components/list.js'
import type { MenuItem } from 'mdui/components/menu-item.js'
import type { Menu } from 'mdui/components/menu.js'
import type { NavigationBarItem } from 'mdui/components/navigation-bar-item.js'
import type { NavigationBar } from 'mdui/components/navigation-bar.js'
import type { NavigationDrawer } from 'mdui/components/navigation-drawer.js'
import type { NavigationRail } from 'mdui/components/navigation-rail.js'
import type { NavigationRailItem } from 'mdui/components/navigation-rail-item.js'
import type { Radio } from 'mdui/components/radio.js'
import type { RadioGroup } from 'mdui/components/radio-group.js'
import type { RangeSlider } from 'mdui/components/range-slider.js'
import type { Ripple } from 'mdui/components/ripple.js'
import type { SegmentedButton } from 'mdui/components/segmented-button.js'
import type { SegmentedButtonGroup } from 'mdui/components/segmented-button-group.js'
import type { Select } from 'mdui/components/select.js'
import type { Slider } from 'mdui/components/slider.js'
import type { Snackbar } from 'mdui/components/snackbar.js'
import type { Switch } from 'mdui/components/switch.js'
import type { Tab } from 'mdui/components/tab.js'
import type { TabPanel } from 'mdui/components/tab-panel.js'
import type { Tabs } from 'mdui/components/tabs.js'
import type { TextField } from 'mdui/components/text-field.js'
import type { Tooltip } from 'mdui/components/tooltip.js'
import type { TopAppBarTitle } from 'mdui/components/top-app-bar-title.js'
import type { TopAppBar } from 'mdui/components/top-app-bar.js'

declare module 'vue' {
  export interface GlobalComponents {
    'MduiAvatar': Avatar & ReservedProps
    'MduiBadge': Badge & ReservedProps
    'MduiBottomAppBar': BottomAppBar & ReservedProps
    'MduiButton': Button & ReservedProps
    'MduiButtonIcon': ButtonIcon & ReservedProps
    'MduiCard': Card & ReservedProps
    'MduiCheckbox': Checkbox & ReservedProps
    'MduiChip': Chip & ReservedProps
    'MduiCircularProgress': CircularProgress & ReservedProps
    'MduiCollapse': Collapse & ReservedProps
    'MduiCollapseItem': CollapseItem & ReservedProps
    'MduiDialog': Dialog & ReservedProps
    'MduiDivider': Divider & ReservedProps
    'MduiDropdown': Dropdown & ReservedProps
    'MduiFab': Fab & ReservedProps
    'MduiIcon': Icon & ReservedProps
    'MduiLayout': Layout & ReservedProps
    'MduiLayoutItem': LayoutItem & ReservedProps
    'MduiLayoutMain': LayoutMain & ReservedProps
    'MduiLinearProgress': LinearProgress & ReservedProps
    'MduiListItem': ListItem & ReservedProps
    'MduiListSubheader': ListSubheader & ReservedProps
    'MduiList': List & ReservedProps
    'MduiMenuItem': MenuItem & ReservedProps
    'MduiMenu': Menu & ReservedProps
    'MduiNavigationBarItem': NavigationBarItem & ReservedProps
    'MduiNavigationBar': NavigationBar & ReservedProps
    'MduiNavigationDrawer': NavigationDrawer & ReservedProps
    'MduiNavigationRail': NavigationRail & ReservedProps
    'MduiNavigationRailItem': NavigationRailItem & ReservedProps
    'MduiRadio': Radio & ReservedProps
    'MduiRadioGroup': RadioGroup & ReservedProps
    'MduiRangeSlider': RangeSlider & ReservedProps
    'MduiRipple': Ripple & ReservedProps
    'MduiSegmentedButton': SegmentedButton & ReservedProps
    'MduiSegmentedButtonGroup': SegmentedButtonGroup & ReservedProps
    'MduiSelect': Select & ReservedProps
    'MduiSlider': Slider & ReservedProps
    'MduiSnackbar': Snackbar & ReservedProps
    'MduiSwitch': Switch & ReservedProps
    'MduiTab': Tab & ReservedProps
    'MduiTabPanel': TabPanel & ReservedProps
    'MduiTabs': Tabs & ReservedProps
    'MduiTextField': TextField & ReservedProps
    'MduiTooltip': Tooltip & ReservedProps
    'MduiTopAppBarTitle': TopAppBarTitle & ReservedProps
    'MduiTopAppBar': TopAppBar & ReservedProps
  }
}
