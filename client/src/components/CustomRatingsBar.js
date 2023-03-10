import React, {useState, useEffect} from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

function CustomRatingBar({
  enabled,
  color,
  size,
  count,
  defaultCount,
  defaultRating,
  setDefaultRating,
}) {
  const [maxRating, setMaxRating] = useState([]);

  useEffect(() => {
    setMaxRating(Array.from(Array(count), (_, index) => index + 1));
    setDefaultRating(defaultCount);
  }, []);

  return (
    <View style={styles.customRatingBarStyle}>
      {maxRating.map((item, key) => {
        return (
          <TouchableOpacity
            activeOpacity={0.7}
            key={item}
            disabled={!enabled}
            onPress={() => setDefaultRating(item)}>
            <Icon
              name={item <= defaultRating ? 'star' : 'star-outline'}
              size={size}
              color={color}
            />
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

export default CustomRatingBar;

const styles = StyleSheet.create({
  customRatingBarStyle: {
    flexDirection: 'row',
  },
});
