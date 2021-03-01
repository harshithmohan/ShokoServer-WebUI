import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { Route } from 'react-router';
import { ToastContainer, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

import { RootState } from '../../core/store';
import Events from '../../core/events';
import Header from '../../components/Layout/Header';
import Sidebar from '../../components/Layout/Sidebar';

import DashboardPage from './Pages/DashboardPage';
import ImportFoldersPage from './Pages/ImportFoldersPage';
import ActionsPage from './Pages/ActionsPage';
import SettingsPage from './Pages/SettingsPage';
import LogsPage from './Pages/LogsPage';

import ImportFolderModal from '../../components/Dialogs/ImportFolderModal';
import LanguagesModal from '../../components/Dialogs/LanguagesModal';
import ProfileModal from '../../components/Dialogs/ProfileModal';

class MainPage extends React.Component<Props> {
  componentDidMount() {
    const {
      load, getSettings, getQueueStatus,
    } = this.props;
    getSettings();
    load();
    getQueueStatus();
  }

  render() {
    const { notifications, toastPosition } = this.props;

    return (
      <React.Fragment>
        {notifications && (
          <ToastContainer
            position={toastPosition}
            autoClose={4000}
            transition={Slide}
            bodyClassName="font-bold font-exo2"
            className="mt-20"
          />
        )}
        <div className="flex flex-grow h-full">
          <ImportFolderModal />
          <LanguagesModal />
          <ProfileModal />
          <div className="flex h-screen sidebar-container">
            <Sidebar />
          </div>
          <div className="flex flex-col flex-grow h-full">
            <Header />
            <div className="overflow-y-auto flex-grow">
              <Route exact path="/main/dashboard" component={DashboardPage} />
              <Route exact path="/main/import-folders" component={ImportFoldersPage} />
              <Route exact path="/main/actions" component={ActionsPage} />
              <Route exact path="/main/logs" component={LogsPage} />
              <Route exact path="/main/settings" component={SettingsPage} />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const mapState = (state: RootState) => ({
  toastPosition: state.webuiSettings.v3.toastPosition,
  notifications: state.webuiSettings.v3.notifications,
});

const mapDispatch = {
  getQueueStatus: () => ({ type: Events.MAINPAGE_QUEUE_STATUS }),
  getSettings: () => ({ type: Events.SETTINGS_GET_SERVER }),
  load: () => ({ type: Events.MAINPAGE_LOAD }),
};

const connector = connect(mapState, mapDispatch);

type Props = ConnectedProps<typeof connector>;

export default connector(MainPage);
