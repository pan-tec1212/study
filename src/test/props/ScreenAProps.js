// // import React, {useEffect} from 'react';
// import {View, Button, Text} from 'react-native';
// import {CommonActions} from '@react-navigation/native';
// [
//   {
//     navigation: {},
//     route: {
//       key: 'ScreenA-hyzAegxqGbj067L5Wjnkb',
//       name: 'ScreenA',
//     },
//   },
//   {
//     navigation: {
//       addListener: ['Function addListener'],
//       canGoBack: ['Function canGoBack'],
//       dispatch: ['Function dispatch'],
//       getId: ['Function getId'],
//       getParent: ['Function getParent'],
//       getState: ['Function anonymous'],
//       goBack: ['Function anonymous'],
//       isFocused: ['Function isFocused'],
//       navigate: ['Function anonymous'],
//       pop: ['Function anonymous'],
//       popToTop: ['Function anonymous'],
//       push: ['Function anonymous'],
//       removeListener: ['Function removeListener'],
//       replace: ['Function anonymous'],
//       reset: ['Function anonymous'],
//       setOptions: ['Function setOptions'],
//       setParams: ['Function anonymous'],
//     },
//     route: {
//       key: 'ScreenA-hyzAegxqGbj067L5Wjnkb',
//       name: 'ScreenA',
//       params: 'undefined',
//       path: 'undefined',
//     },
//   },
// ];
// const sample = ({navigation}) => {
//   const params = {};
//   const value = {};
//   // const navigation = useNavigation();
//   // const route = useRoute();
//   // 1.ナビゲーション基本操作
//   // navigate: 画面遷移
//   navigation.navigate('Screen', {params});
//   // 使用シーン：
//   // - メニュー選択時の画面遷移
//   // - ボタンクリックでの画面遷移
//   // - 条件に基づく画面遷移

//   // push: 同じ画面を重ねて表示
//   navigation.push('Screen', {params});
//   // 使用シーン：
//   // - 同じ画面を複数回スタックしたい場合
//   // - チャット画面の履歴表示
//   // - 階層的なコンテンツ表示

//   // goBack: 前の画面に戻る
//   navigation.goBack();
//   // 使用シーン：
//   // - 戻るボタンの実装
//   // - キャンセル操作
//   // - モーダルを閉じる

//   // 2.状態管理と確認
//   // popToTop: スタックの最初に戻る
//   navigation.popToTop();
//   // 使用シーン：
//   // - ホーム画面に戻る
//   // - フローの完了時
//   // - エラー発生時のリセット

//   // canGoBack: 戻れるかの確認
//   const canGoBack = navigation.canGoBack();
//   // 使用シーン：
//   // - 戻るボタンの表示/非表示制御
//   // - アプリ終了の確認
//   // - ナビゲーションの分岐処理

//   // isFocused: 画面がフォーカスされているか
//   const focused = navigation.isFocused();
//   // 使用シーン：
//   // - 画面の更新判断
//   // - アニメーションの制御
//   // - データフェッチの制御

//   // 3.パラメータとオプション
//   // setParams: パラメータの更新
//   navigation.setParams({newParam: value});
//   // 使用シーン：
//   // - フォーム入力値の保持
//   // - 画面状態の更新
//   // - フィルター条件の変更

//   // setOptions: 画面オプションの更新
//   navigation.setOptions({
//     title: '新しいタイトル',
//     headerRight: () => <Button title="保存" />,
//   });
//   // 使用シーン：
//   // - 動的なヘッダー更新
//   // - 条件に基づくUI変更
//   // - ユーザー操作に応じたオプション変更

//   // 4.イベントリスナー
//   // addListener: イベントの監視
//   const unsubscribe = navigation.addListener('focus', () => {
//     // 画面がフォーカスされた時の処理
//   });
//   // 使用シーン：
//   // - 画面表示時のデータ更新
//   // - アニメーション制御
//   // - 分析イベントの送信

//   // removeListener: リスナーの削除
//   navigation.removeListener('focus', callback);
//   // 使用シーン：
//   // - コンポーネントのクリーンアップ
//   // - メモリリーク防止

//   // 5.高度な操作
//   // reset: ナビゲーション状態のリセット
//   navigation.reset({
//     index: 0,
//     routes: [{name: 'Home'}],
//   });
//   // 使用シーン：
//   // - ログアウト時の画面リセット
//   // - エラー発生時の回復
//   // - フロー完了後のリセット

//   // dispatch: カスタムナビゲーションアクション
//   navigation.dispatch(
//     CommonActions.navigate({
//       name: 'Screen',
//       params: {id: 1},
//     }),
//   );

//   // 6.route情報の利用
//   // 使用シーン：
//   // - 複雑なナビゲーションロジック
//   // - カスタムナビゲーション動作
//   // - ミドルウェアとの連携
//   // route.key: 画面の一意キー
//   console.log(route.key);
//   // 使用シーン：
//   // - キャッシュキーとして
//   // - コンポーネントの識別
//   // - デバッグ

//   // route.name: 画面名
//   console.log(route.name);
//   // 使用シーン：
//   // - 条件分岐
//   // - ログ出力
//   // - 画面タイトル設定

//   // route.params: パラメータ
//   console.log(route.params);
//   // 使用シーン：
//   // - 画面間データ受け渡し
//   // - 状態管理
//   // - 画面設定
// };
