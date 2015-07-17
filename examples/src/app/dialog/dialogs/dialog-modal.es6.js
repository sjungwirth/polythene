'use strict';

import m from 'mithril';
import dialog from 'polythene/dialog/dialog';
import common from './common';

const modalDialog = {
    view: () => {
        return m.component(dialog, Object.assign({}, common.dialogProps, {
            title: 'Modal',
            body: m.trust(common.template),
            modal: true,
            backdrop: true
        }));
    }
};

export default modalDialog;