<!--  PHAN useState-->

const [something, setSomething] = useState(initialValue);
-- Đây là cú pháp Destructuring trong Js. Là một Hook cơ bản trong React. Nó được dùng để khai báo và quản lý trạng thái trong một thành phần (component) chức năng.
-- useState trả về một mảng gồm hai phần tử
-- something: Biến trạng thái hiện tại. Nó lưu trữ giá trị trạng thái
-- setSomething: Hàm dùng để cập nhật giá trị trạng thái
-- Khi gọi useState(initialValue) nó khởi tạo trạng thái với giá trị initialValue

PROPS

1. Hiểu cách truyền props

### Khi truyền props bằng cú pháp props={item}, bạn sẽ cần truy cập thuộc tính thông qua props.props trong component con. Nếu muốn tránh việc lồng nhau và làm code gọn gàng hơn, hãy sử dụng cú pháp spread operator (...item).

### Sử dụng cú pháp ...item giúp bạn truyền trực tiếp từng thuộc tính của đối tượng vào component, điều này làm code rõ ràng và dễ hiểu hơn. Trong component con Bai1, bạn có thể trực tiếp sử dụng props.name và props.price.

### Nếu quyết định sử dụng props={item}, hãy nhớ rằng các thuộc tính sẽ được đóng gói bên trong props.props. Ví dụ: props.props.name

### Đối với mảng:

{products.map((item, key) => (
<Bai1 key={key} name={item[0]} price={item[1]} />
))}
