import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
import * as ActiveStorage from "@rails/activestorage"
import  "../stylesheets/app/app.scss"
import "channels"

import "../dom/bootstrap";
import "../dom/feather";

// Components
import "../dom/dropdown";
import "../dom/modal";
import "../dom/tab";
import "../dom/accordion";
import "../dom/side-menu";
import "../dom/mobile-menu";
import "../dom/dark-mode-switcher";
import "../dom/tippy";

require.context('../images', true)

Rails.start()
Turbolinks.start()
ActiveStorage.start()
