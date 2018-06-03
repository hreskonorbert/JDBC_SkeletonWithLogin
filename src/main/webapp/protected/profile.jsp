<%@ page contentType="text/html; charset=UTF-8" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!doctype html>

<html lang="en">
    <script type="text/javascript" src="../js/profile.js"></script>

    <body>

        <div id="profile" class="content">
            <h1>Profile</h1>
            <p>Email: <c:out value="${user.email}"/></p>
        </div>

    </body>

</html>








