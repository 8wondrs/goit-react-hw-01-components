## 1 - Профіль соціальної мережі

Необхідно створити компонент `<Profile>`, за допомогою якого ми могли б відображати інформацію про користувача соціальної мережі. Дані про користувача лежать у файлі [user.json](https://minhaskamal.github.io/DownGit/#/home?url=https://github.com/goitacademy/react-homework/blob/master/homework-01/social-profile/user.json).

![component preview](https://textbook.edu.goit.global/lms-react-homework/v1/uk/img/hw-01/social-profile.png)

### Опис компонента `<Profile>`

Компонент повинен приймати кілька пропсів з інформацією про користувача:

- `username` — ім'я користувача
- `tag` — тег в соціальній мережі без `@`
- `location` — місто і країна
- `avatar` — посилання на зображення
- `stats` — об'єкт з інформацією про активності

Компонент повинен створювати DOM елемент наступної структури.

```html
<div class="profile">
  <div class="description">
    <img
      src="https://cdn-icons-png.flaticon.com/512/1077/1077012.png"
      alt="User avatar"
      class="avatar"
    />
    <p class="name">Petra Marica</p>
    <p class="tag">@pmarica</p>
    <p class="location">Salvador, Brasil</p>
  </div>

  <ul class="stats">
    <li>
      <span class="label">Followers</span>
      <span class="quantity">1000</span>
    </li>
    <li>
      <span class="label">Views</span>
      <span class="quantity">2000</span>
    </li>
    <li>
      <span class="label">Likes</span>
      <span class="quantity">3000</span>
    </li>
  </ul>
</div>
```

### Приклад використання

```jsx
import user from 'path/to/user.json;

<Profile
  username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}
/>
```

## 2- Секція статистики

Створити компонент `<Statistics>`, який би відображав статистику з переданих пропсів. Наприклад, завантаження у хмару за типом файлів, відвідування веб-сторінки користувачами різних країн, фінансові витрати тощо. Дані про статистику лежать у файлі [data.json](https://minhaskamal.github.io/DownGit/#/home?url=https://github.com/goitacademy/react-homework/blob/master/homework-01/statistics/data.json).

![component preview](https://textbook.edu.goit.global/lms-react-homework/v1/uk/img/hw-01/statistics.jpg)

### Опис компонента `<Statistics>`

Компонент повинен приймати два пропи `title` і `stats`, в яких вказується заголовок та об'єкт статистики.

- `title` – не обов'язковий, і якщо він не переданий, не повинна рендеритись розмітка заголовка `<h2>`.
- `stats` – масив об'єктів, що містять інформацію про елемент статистики. Може мати довільну кількість елементів.
- Колір фону елемента статистики в оформленні можна пропустити або створити функцію для генерації випадкового кольору.

Компонент повинен створювати DOM елемент наступної структури.

```html
<section class="statistics">
  <h2 class="title">Upload stats</h2>

  <ul class="stat-list">
    <li class="item">
      <span class="label">.docx</span>
      <span class="percentage">4%</span>
    </li>
    <li class="item">
      <span class="label">.mp3</span>
      <span class="percentage">14%</span>
    </li>
    <li class="item">
      <span class="label">.pdf</span>
      <span class="percentage">41%</span>
    </li>
    <li class="item">
      <span class="label">.mp4</span>
      <span class="percentage">12%</span>
    </li>
  </ul>
</section>
```

### Приклад використання

```js
import data from '/path/to/data.json';

<Statistics title="Upload stats" stats={data} />
<Statistics stats={data} />
```

## 3 - Список друзів

Необхідно створити компонент `<FriendList>`, за допомогою якого ми могли б відображати інформацію про друзів користувача. Інформація про друзів зберігається у файлі [friends.json](https://minhaskamal.github.io/DownGit/#/home?url=https://github.com/goitacademy/react-homework/blob/master/homework-01/friend-list/friends.json).

![component preview](https://textbook.edu.goit.global/lms-react-homework/v1/uk/img/hw-01/friend-list.jpg)

### Опис компонента `<FriendList>`

Компонент повинен приймати один проп `friends` – масив об'єктів друзів.

Компонент повинен створювати DOM наступної структури.

```html
<ul class="friend-list">
  <!-- Довільна кіл-сть FriendListItem -->
</ul>
```

### Опис компонента `<FriendListItem>`

Компонент повинен приймати кілька пропів:

- `avatar` - посилання на аватар
- `name` - ім'я друга
- `isOnline` - буль, що сигналізує про стан друга: в мережі або ні.

Залежно від пропа `isOnline`, повинен змінюватися колір фону `span.status`. Це можна зробити за допомогою різних CSS-класів або Styled Components.

Компонент повинен створювати DOM наступної структури.

```html
<li class="item">
  <span class="status"></span>
  <img class="avatar" src="" alt="User avatar" width="48" />
  <p class="name"></p>
</li>
```

### Приклад використання

```jsx
import friends from 'path/to/friends.json';

<FriendList friends={friends} />;
```

## 4 - Історія транзакцій

Необхідно створити компонент історії транзакцій в особистому кабінеті інтернет-банку.

![component preview](https://textbook.edu.goit.global/lms-react-homework/v1/uk/img/hw-01/transactions.jpg)

Дані для списку доступні у форматі JSON у файлі [transactions.json](https://minhaskamal.github.io/DownGit/#/home?url=https://github.com/goitacademy/react-homework/blob/master/homework-01/transaction-history/transactions.json). Це масив об'єктів, де кожен об'єкт описує одну транзакцію з наступними властивостями:

- `id` — унікальний ідентифікатор транзакції
- `type` — тип транзакції
- `amount` - сума транзакції
- `currency` - тип валюти

### Опис компонента `<TransactionHistory>`

Необхідно створити компонент `<TransactionHistory>`, який приймає один проп `items` – масив об'єктів транзакцій з `transactions.json`. Компонент створює розмітку таблиці. Кожна транзакція – це рядок таблиці. У прикладі наведена розмітка двох транзакцій.

```html
<table class="transaction-history">
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>Invoice</td>
      <td>125</td>
      <td>USD</td>
    </tr>
    <tr>
      <td>Withdrawal</td>
      <td>85</td>
      <td>USD</td>
    </tr>
  </tbody>
</table>
```

### Приклад використання

```jsx
import transactions from 'path/to/transactions.json';

<TransactionHistory items={transactions} />;
```
