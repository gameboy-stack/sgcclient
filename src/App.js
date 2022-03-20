import { BrowserRouter as Router, Route , Routes } from 'react-router-dom';
import Dashboard from './components/student/Dashboard';
import ReportForm from './components/student/ReportForm';
import MyReports from './components/student/MyReports';
import Feedback from './pages/Feedback';
import Login from './pages/Login';
import Response from './components/student/Response';
import Singlereport from './components/student/Singlereport';
import Singleresponse from './components/student/Singleresponse';
import MemberDashboard from './components/member/MemberDashboard'
import MemberSinglereport from './components/member/MemberSinglereport'
import MemberResponseForm from './components/member/MemberResponseForm'
import MemberStatusForm from './components/member/MemberStatusForm';
import MemberReportAnalytics from './components/member/MemberReportAnalytics';
import AdminChangeofpassword from './components/admin/AdminChangeofpassword';
import AdminAddGmail from './components/admin/AdminAddGmail';


function App() {
	
	return (

    <Router>
    	<Routes>
			<Route index element={<Login />} />

			<Route path="/Login" element={<Login />} />
			
			<Route path="/feedback" element={<Feedback />} />

			<Route path="/student/dashboard" element={<Dashboard />} />

			<Route path="/student/dashboard/:id" element={<Singlereport />} />

			<Route path="/student/report" element={<ReportForm />} />

			<Route path="/student/myreport" element={<MyReports />} />
			
			<Route path="/student/response" element={<Response />} />

			<Route path="/student/dashboard/response/:id" element={<Singleresponse />} />

			<Route path="/member/dashboard" element={<MemberDashboard />} />

			<Route path="/member/dashboard/:id" element={<MemberSinglereport />} />

			<Route path="/member/reponse" element={<MemberResponseForm />} />

			<Route path="/member/status" element={<MemberStatusForm />} />
			
			<Route path="/member/reports" element={<MemberReportAnalytics />} />

			<Route path="/admin/cop" element={<AdminChangeofpassword />} />

			<Route path="/admin/addgmail" element={<AdminAddGmail />} />



			{/* <Route path="/member/dashboard/response/:id" element={<Singleresponse />} />  */}


      	</Routes>
    </Router>
    
  );
}

export default App;
