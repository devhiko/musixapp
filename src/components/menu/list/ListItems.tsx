import { View } from "react-native";
import { Appbar, Text } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

type TListItemsProps = { item: string };
export const ListItems = ({ item }: TListItemsProps) => {
  return (
    <View className=" mb-6 flex flex-row shadow-none justify-around items-center bg-purple-50 ">
      <Icon name="music-box-outline" size={64} color="#aaa" />
      <View className="flex-col py-2">
        <Text variant="bodyLarge" className="font-bold">
          {item}
        </Text>
        <Text variant="bodyLarge" className="text-gray-500">
          Toplam 3 şarkı
        </Text>
      </View>
      <Appbar.Action icon="play-outline" size={48} color="#aaa" />
    </View>
  );
};
