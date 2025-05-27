import React, { useState } from "react";
import "./Profile.scss";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import imgHeader from "../../assets/Logo.png";
import { useNavigate } from "react-router-dom";
function Profile() {
  const navigate = useNavigate();
  const logOut = () => {
    localStorage.removeItem("token");
    // location.reload()
    navigate("/home");
  };
  const [item, setItem] = useState([
    {
      id: 1, title: "Java OOP", des: "Lập trình hướng đối tượng",
      tags: "JAVA",
    },
    { id: 2, title: "Java Spring", des: "Framework mạnh mẽ", tags: "JAVA" },
    { id: 3, title: "Java Threads", des: "Xử lý đa luồng", tags: "JAVA" },
    {
      id: 4,
      title: "Python Basics",
      des: "Ngôn ngữ đơn giản, mạnh mẽ",
      tags: "PYTHON",
    },
    { id: 5, title: "Python Django", des: "Framework cho web", tags: "PYTHON" },
    {
      id: 6,
      title: "Python AI",
      des: "Ứng dụng trí tuệ nhân tạo",
      tags: "PYTHON",
    },
    {
      id: 7,
      title: "HTML Semantics",
      des: "Tối ưu SEO với HTML5",
      tags: "HTML, CSS",
    },
    {
      id: 8,
      title: "CSS Grid",
      des: "Xây dựng bố cục linh hoạt",
      tags: "HTML, CSS",
    },
    {
      id: 9,
      title: "CSS Animations",
      des: "Tạo hiệu ứng đẹp mắt",
      tags: "HTML, CSS",
    },
    { id: 10, title: "ABC", des: "description", tags: "HTML, CSS" },
    { id: 11, title: "ABC", des: "description", tags: "HTML, CSS" },
    { id: 12, title: "ABC", des: "description", tags: "HTML, CSS" },
    { id: 13, title: "ABC", des: "description", tags: "HTML, CSS" },
    { id: 14, title: "ABC", des: "description", tags: "HTML, CSS" },
  ]);

  // Trang thai hien thi form nhap
  const [showForm, setShowForm] = useState(false);
  const showFormItem = () => {
    setShowForm(true);
  };

  // trang thai luu bai dang moimoi
  const [newTitle, setNewTitle] = useState({ title: "", des: "", tags: "" });

  // cap nhat du lieu tu input
  const handleChange = (e) => {
    setNewTitle({ ...newTitle, [e.target.name]: e.target.value });
  };

  //  luu bai dang moi
  const handleSaveItem = () => {
    if (newTitle.title && newTitle.des && newTitle.tags) {
      setItem([...item, { id: item.length + 1, ...newTitle }]);
      setNewTitle({ title: "", des: "", tags: "" }); // Reset form
      setShowForm(false); // Ẩn form sau khi thêm
    }
  };

  // Trạng thái tìm kiếm
  const [searchTerm, setSearchTerm] = useState("");
  // Trạng thái lọc theo tags
  const [selectedTag, setSelectedTag] = useState("");

  // Lọc danh sách dựa trên từ khóa tìm kiếm và tags
  const filteredItems = item.filter(
    (post) =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedTag === "" || post.tags.includes(selectedTag))
  );

  // Trạng thái chỉnh sửa
  const [editItem, setEditItem] = useState(null);
  // Bắt đầu chỉnh sửa bài đăng
  const handleEdit = (post) => {
    setEditItem(post);
  };
  // Cập nhật nội dung bài đăng
  const handleChangeEdit = (e) => {
    setEditItem({ ...editItem, [e.target.name]: e.target.value });
  };
  // Lưu bài đăng sau khi chỉnh sửa
  const handleSaveEdit = () => {
    setItem(item.map((post) => (post.id === editItem.id ? editItem : post)));
    setEditItem(null);
  };
  // Xóa bài đăng
  const handleDelete = (id) => {
    setItem(item.filter((post) => post.id !== id));
  };

  return (
    <div className="profile">
      <ul className="menuProfile">
        <li className="img" onClick={() => navigate("/home")}>
          <img src={imgHeader} alt="" />
        </li>
        <li>Posts</li>
        <li onClick={() => logOut()}>Logout</li>
      </ul>
      <div className="content">
        <div className="btnProfile">
          <button className="btnAdd" onClick={showFormItem}>
            Add new
          </button>
          <div>
            <input
              type="text"
              className="inTitle"
              placeholder="Title"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <select
              name="languages"
              id="tags"
              className="tags"
              value={selectedTag}
              onChange={(e) => setSelectedTag(e.target.value)}
            >
              <option value="">ALL</option>
              <option value="HTML, CSS">HTML, CSS</option>
              <option value="JAVA">JAVA</option>
              <option value="PYTHON">PYTHON</option>
            </select>
          </div>
        </div>
        <table className="tableProfile">
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Description</th>
              <th>Tags</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredItems.map((post) => (
              <tr key={post.id}>
                <td>{post.id}</td>
                <td>
                  {editItem?.id === post.id ? (
                    <input
                      type="text"
                      name="title"
                      value={editItem.title}
                      onChange={handleChangeEdit}
                    />
                  ) : (
                    post.title
                  )}
                </td>
                <td>
                  {editItem?.id === post.id ? (
                    <input
                      type="text"
                      name="des"
                      value={editItem.des}
                      onChange={handleChangeEdit}
                    />
                  ) : (
                    post.des
                  )}
                </td>
                <td>{post.tags}</td>
                <td>
                  {editItem?.id === post.id ? (
                    <>
                      <button onClick={handleSaveEdit}>Save</button>
                      <button onClick={() => setEditItem(null)}>Cancel</button>
                    </>
                  ) : (
                    <div className="btnED">
                      <button
                        onClick={() => handleEdit(post)}
                        className="btnEdit"
                      >
                        <MdEdit />
                      </button>
                      <button
                        onClick={() => handleDelete(post.id)}
                        className="btnDelete"
                      >
                        <MdDelete />
                      </button>
                    </div>
                  )}
                </td>
              </tr>
            ))}
            {showForm && (
              <tr>
                <td>{item.length + 1}</td>
                <td>
                  <input
                    type="text"
                    name="title"
                    placeholder="Title"
                    className="input_form"
                    onChange={handleChange}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    name="des"
                    placeholder="Description"
                    className="input_form"
                    onChange={handleChange}
                  />
                </td>
                <td>
                  <select
                    name="tags"
                    className="input_form"
                    onChange={handleChange}
                  >
                    <option value="">Select Tag</option>
                    <option value="HTML, CSS">HTML, CSS</option>
                    <option value="JAVA">JAVA</option>
                    <option value="PYTHON">PYTHON</option>
                  </select>
                </td>
                <td>
                  <button className="btnConfirm" onClick={handleSaveItem}>
                    Add
                  </button>
                  <button
                    className="btnConfirm"
                    onClick={() => setShowForm(false)}
                  >
                    Cancel
                  </button>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Profile;
